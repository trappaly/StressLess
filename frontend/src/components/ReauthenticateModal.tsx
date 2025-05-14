'use client';

import { useState } from 'react';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { useAuth } from '@/components/context/auth/AuthContext';
import axios from 'axios';
import { backendBaseUrl } from '@/lib/utils';
import { Input } from '@/components/ui/input'; // assuming you're using shadcn/ui Input
import { Button } from '@/components/ui/button'; // shadcn/ui Button

interface Props {
  onSuccessAction: () => void;
  onCancelAction: () => void;
}

export default function ReauthenticateModal({
  onSuccessAction,
  onCancelAction,
}: Props) {
  const { user, deleteAccount } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReauthAndDelete = async () => {
    if (!user || !user.email || !user.uid) {
      setError('User not signed in or missing email.');
      return;
    }

    setLoading(true);
    setError('');
    const credential = EmailAuthProvider.credential(user.email, password);

    try {
      await reauthenticateWithCredential(user, credential);
      const res = await axios.delete(
        `${backendBaseUrl}/api/auth/delete/${user.uid}`
      );

      if (res.status === 201 || res.status === 200) {
        await deleteAccount();
        onSuccessAction();
      } else {
        setError('Failed to delete user data from the backend.');
      }
    } catch (err: unknown) {
      console.error(err);
      setError('Reauthentication failed. Please check your password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">
          Please re-enter your password to permanently delete your account.
        </p>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </div>
      {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
      <div className="flex justify-end gap-2 pt-2">
        <Button variant="outline" onClick={onCancelAction} disabled={loading}>
          Cancel
        </Button>
        <Button
          variant="destructive"
          onClick={handleReauthAndDelete}
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Confirm & Delete'}
        </Button>
      </div>
    </div>
  );
}
