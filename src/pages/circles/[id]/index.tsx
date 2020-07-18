import React from "react"; // React というでかいすべてを取ってくる
import { useRouter } from "next/router"; // useRouter という単体の関数を取ってくる
import { NextPage } from "next"; // NextPage という単体の型を取ってくる
import Link from "next/link";
import styles from "./index.module.css";
import { Item, ItemProps } from "@/components/item-cell";
import { Badge } from "@/components/badge";
import { ItemBanner } from "@/components/item-banner";

type ItemBannerProps = React.ComponentProps<typeof ItemBanner>

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <Link href="/">
          <a className={styles.logoWrapper}>
            <img className={styles.logo} src="/images/logo.svg" />
          </a>
        </Link>
        <Link href="/signup">
          <a className={[styles.blackButton, styles.button].join(" ")}>
            新規登録
          </a>
        </Link>
        <Link href="/login">
          <a className={[styles.whiteButton, styles.button].join(" ")}>
            ログイン
          </a>
        </Link>
      </nav>
      <h1 className={styles.circleName}>親方Project</h1>
    </header>
  );
};

type MainProps = {
  circleDesciption: string;
};
const Main: React.FC<MainProps> = ({ circleDesciption }) => {
  const items: ItemProps[] = [
    {
      category: "ウェブアプリ",
      title: "Slack App開発ガイド",
      eventName: "技術書典6",
      publishedAt: new Date(),
      imagePath: "/images/circle_item.png",
      path: "/hoge",
    },
    {
      category: "ウェブアプリ",
      title: "Slack App開発ガイド",
      eventName: "技術書典6",
      publishedAt: new Date(),
      imagePath: "/images/circle_item.png",
      path: "/hoge",
    },
    {
      category: "ウェブアプリ",
      title: "Slack App開発ガイド",
      eventName: "技術書典6",
      publishedAt: new Date(),
      imagePath: "/images/circle_item.png",
      path: "/hoge",
    },
    {
      category: "ウェブアプリ",
      title: "Slack App開発ガイド",
      eventName: "技術書典6",
      publishedAt: new Date(),
      imagePath: "/images/circle_item.png",
      path: "/hoge",
    },
    {
      category: "ウェブアプリ",
      title: "Slack App開発ガイド",
      eventName: "技術書典6",
      publishedAt: new Date(),
      imagePath: "/images/circle_item.png",
      path: "/hoge",
    },
  ];
  const events:ItemBannerProps[] = [
    {
      text: "技術書典9",
      startAt: "2019.09.12",
      endAt: "2020.09.22",
    },
    {
      text: "技術書典8",
      startAt: "2019.09.12",
      endAt: "2020.09.22",
    },
    {
      text: "技術書典7",
      startAt: "2019.09.12",
      endAt: "2019.09.12",
    } 
  ]
  return (
    <main className={styles.mainContainer}>
      <div className={styles.circleContent}>
        <p className={styles.circleDescription}>{circleDesciption}</p>
        <h2 className={styles.heading}>
          <span className={styles.headingLabel}>頒布物</span>{" "}
          <Badge value={items.length} />
        </h2>
        <div className={styles.itemContainer}>
          <ul className={styles.itemList}>
            {items.map((item, index) => (
              <li className={styles.item} key={index}>
                <Item {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.circleSide}>
        <h2 className={styles.heading}>
          <span className={styles.headingLabel}>参加イベント</span>{" "}
          <Badge value={events.length} />
        </h2>
        {events.map(event => <ItemBanner {...event}/>)}
        <h2 className={styles.heading}>
          <span className={styles.headingLabel}>関連リンク</span>
        </h2>
        <ul className={styles.linkList}>
          <li><a href="https://twitter.com/oyakata2438">Twitter</a></li>
          <li><a href="https://note.com/oyakata2438/n/nac549aac8cde">サークル公式ページ</a></li>
          <li><a href="https://oyakata.booth.pm/">BOOTH</a></li>
        </ul>
      </div>
    </main>
  );
};

const CirclesShow: NextPage = () => {
  // const router = useRouter()
  // const { id } = router.query
  const circleDesciption =
    "親方Projectでは、エンジニアの困ったを解決する合同誌を作ってます。見積り何もわからん、を集めた「ワンストップ見積もり」、勉強会は楽しいぞ！を集めたワンストップ勉強会をはじめとして、エンジニアの困ったを解決すべく活動中です。執筆者15名(平均)の知見をあなたにワンストップでお届けます。また、執筆者は絶賛募集中。1ページからでも寄稿OKです。あなたの知見を、今、この本に！書いてみたいと思ったときが書くときです。";
  return (
    <>
      <Header />
      <Main circleDesciption={circleDesciption} />
    </>
  );
};

export default CirclesShow;
