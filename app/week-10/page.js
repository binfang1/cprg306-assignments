"use client";
import { useUserAuth } from "./_utils/auth-context.js";
 

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    const signIn = async () => await gitHubSignIn();
    const signOut = async () => await firebaseSignOut();

    return (
        <main>
            <h1 className = "font-bold">Shopping List App</h1>
            {user ? (
                <div>
                    <p onClick={signOut}>Sign Out</p>
                    <a href = "week-10/shopping-list">Go to Shopping List</a>
                </div>
            ) : (
                <p onClick={signIn}>Sign In</p>
            )}
        </main>
    );


}