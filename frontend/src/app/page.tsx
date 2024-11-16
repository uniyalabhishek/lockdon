import LockDonForm from "../components/LockDonForm";
import Logo from "/Users/jake/LockDon/lockdon/frontend/src/assets/your-logo.svg";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center space-y-8">
        <div className="text-center">
          <Logo className="w-200 h-200 mx-auto" />
        </div>
        <LockDonForm />
      </div>
    </main>
  );
}
