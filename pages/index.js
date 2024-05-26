import Table from "./table";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col m-10 ">
      <div className="text-center text-2xl font-bold border rounded-[50px] p-1 bg-fuchsia-700 text-white">LinkSave</div>
      <h1 className="text-xl font-bold text-center">Your Curated Collection of favourite Websites</h1>
      <Table/>
    </div>
  );
}
