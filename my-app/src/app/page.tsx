import Image from "next/image";
import AddUsers from "./components/AddUsers.js"
import DisplayUsers from "./components/DisplayUsers.js"
export default function Home() {
  return (
    <main>
     
      <AddUsers/>
      <DisplayUsers/>
      

    </main>
    
  );
}
