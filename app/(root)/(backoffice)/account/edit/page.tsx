import {getUserData, UserData} from "@/libs/actions/session";
import AccountForm from "@/components/forms/account-form";
import PasswordForm from "@/components/forms/password-form";

export default async function AccountPage() {
    const userData: UserData = await getUserData() as UserData;

    return (
        <>
            <AccountForm accountDetails={userData}/>
            <PasswordForm/>
        </>
    );
}
