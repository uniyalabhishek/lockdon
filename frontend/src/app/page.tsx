import LockDonForm from "../components/LockDonForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center mb-8">
          <h1 className="lock-don-text text-4xl mb-2">LOCK DON</h1>
        </div>
        <LockDonForm />
      </div>
    </main>
  );
}
