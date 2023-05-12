import HackathonCard from "@/components/hackathon-card";
import { api } from "@/services/api";
import { CountryData } from "@/utils/handleCountryData";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Key, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";

interface cityProps {
  country: string;
  city: string;
  img: StaticImageData;
  title: string;
  description: string;
}

export default function City() {
  const [currentCity, setCurrentCity] = useState<cityProps>();
  const [challenges, setChallenges] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.city)
      setCurrentCity(
        CountryData.find((data) => data.city === router.query.city)
      );
  }, [router?.query?.city]);

  function getAllHackathons() {
    fetch('api/hackathons', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(async (res) => {
    const data = await res.json();
    setChallenges(data?.data?.challenges)
  })
    .catch((err) => console.log("err", err));
  }

  useEffect(getAllHackathons, []);

  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {currentCity?.img && (
              <Image
                className="w-100"
                src={currentCity.img}
                alt="First slide"
                height={200}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center p-3"
        style={{ backgroundColor: "rgb(67, 41, 166)", color: "white" }}
      >
        <div>
          <h4>{currentCity?.title}</h4>
          <div className="col-md-6">
            <p>{currentCity?.description}</p>
          </div>
        </div>
      </div>
      <Row className="d-flex justify-content-center mt-4">
        <Col md="10">
          <div className="d-flex justify-content-start mb-4" style={{ borderBottom: '1px solid rgb(217, 212, 237)'}}>Hackathons</div>
          <Row className="d-flex justify-content-center">
            {challenges?.map((challenge: any, key: Key | null | undefined) => (
              <Col md="3" key={key}>
                <HackathonCard {...challenge} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}
