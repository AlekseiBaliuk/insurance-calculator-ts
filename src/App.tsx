import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./App.styled";
import { InsuranceType } from "./components/InsuranceType/InsuranceType";
import { Period } from "./components/Period/Period";
import { PackageType } from "./components/PackageType/PackageType";
import { AdditionalChanges } from "./components/AdditionalChanges/AdditionalChanges";
import { NumberOfPeople } from "./components/NumberOfPeople/NumberOfPeople";
import { TotalSection } from "./components/TotalSection/TotalSection";
import { useEffect, useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [insuranceType, setInsuranceType] = useState("annual");
  const [days, setDays] = useState(1);
  const [packageType, setPackageType] = useState("basic");
  const [additional, setAdditional] = useState("no");
  const [numOfPeople, setNumOfPeople] = useState(1);

  interface IObjectKeys {
    [key: string]: number;
  }

  interface data extends IObjectKeys {
    basic: number;
    extended: number;
    extra: number;
    no: number;
    cancellation: number;
    sport: number;
  }

  useEffect(() => {
    const short: data = {
      basic: 1.2,
      extended: 1.8,
      extra: 2.4,
      no: 1,
      cancellation: 1.5,
      sport: 1.3,
    };

    const annual: data = {
      basic: 39,
      extended: 49,
      extra: 59,
      no: 1,
      cancellation: 1.2,
      sport: 1.1,
    };

    const calculateTotal = () => {
      let result: number = 0;

      if (insuranceType === "short") {
        result = days * short[packageType] * short[additional] * numOfPeople;
      }

      if (insuranceType === "annual") {
        result = days * annual[packageType] * annual[additional] * numOfPeople;
      }

      setTotal(Number(result.toFixed(2)));
    };

    calculateTotal();
  }, [additional, days, insuranceType, numOfPeople, packageType]);

  return (
    <Wrapper>
      <Header />
      <Container>
        <InsuranceType setInsuranceType={setInsuranceType} />
        <Period setDays={setDays} />
        <PackageType setPackageType={setPackageType} />
        <AdditionalChanges setAdditional={setAdditional} />
        <NumberOfPeople setNumOfPeople={setNumOfPeople} />
      </Container>
      <TotalSection total={total} />
    </Wrapper>
  );
}

export default App;
