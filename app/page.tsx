import ApiTester from "@/components/test/ApiTester";

export default function Home() {
  return (
      <main className="flex flex-col h-screen w-full justify-center items-center gap-16">
          <ApiTester requestType="post"/>
          <ApiTester requestType="get"/>
      </main>
  );
}
