import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.css";
import { Col, Row } from "reactstrap";
import CardRounded from "@/components/card-rounded";
import { CountryData } from "@/utils/handleCountryData";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>Geo Hacker View</title>
        <meta name="description" content="The Project consists of a page that brings hackathons based on cities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div
          className={`d-flex justify-content-center ${styles.bgSecondMain} py-4`}
        >
          <div className="">
            <h1 className={styles.h1}>Geo Hacker View</h1>
            <h2 className={`d-flex justify-content-center ${styles.h1} mt-5`}>
              Hackathons
            </h2>
          </div>
        </div>
        <div className={`d-flex justify-content-center ${styles.bgThreeMain}`}>
          Hackathons by city
        </div>
        <Row className="p-4 d-flex justify-content-center" style={{backgroundColor: "rgb(67, 41, 166)", height:'100vh'}}>
          <Col md="10">
            <Row>
              {CountryData.map((data, key) => (
                <Col md="3" className="my-4" key={key}>
                  <CardRounded
                    src={data.img}
                    label={data.city}
                    onClick={() => {
                      push({
                        pathname: "/[city]",
                        query: { city: data.city },
                      });
                    }}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </main>
    </>
  );
}
