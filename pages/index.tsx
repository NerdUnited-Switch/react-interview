import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeaderComponenets from "@/components/HeaderComponents/HeaderComponenets";
import BodyComponenet from "@/components/BodyComponents/BoadyComponents"
import { useState } from "react";

type Task = {
  content: string
  completed: boolean;
}



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [taskList, settaskList] = useState<Task[]>([])

  return (
    <>
      <HeaderComponenets
        taskList={taskList}
        settaskList={(taskList: Task[]) => settaskList(taskList)}
      ></HeaderComponenets>


      <BodyComponenet taskList={taskList} settaskList={(taskList: Task[]) => settaskList(taskList)}></BodyComponenet>
    </>
  );
}
