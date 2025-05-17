'use client';
import { useSearchParams } from 'next/navigation';

export default function SessionExpiredNotice() {
    const params = useSearchParams();
    const reason = params.get('redirect');

    if (reason === 'not-logged-in') {
        return (
            <div className="fieldset mt-2 p-5">
                <div className="alert alert-error">
                    Votre session a expiré.
                </div>
            </div>
        );
    }

    return null;
}