import SubHeading from "../headings/subheading";
import Button from "../button/Button";
import { getAllData } from "@/client";
import CardDairies from "../card/Card";
import EnterSection from "../animations/enterSection/EnterSection";
import LayoutY from "../layouts/layoutY/LayoutY";
import Container from "../layouts/container/Container";
import Link from "next/link";
import { QueryType } from "@/types/types";

const MagicDairies = async () => {
  const query: QueryType[] | null = await getAllData("dairies");
  const diaries = query?.slice(0, 3);

  return (
    <EnterSection>
      <Container>
        <LayoutY>
          <SubHeading title="Magic Dairies" />
          <div className="flex justify-center items-center space-x-6">
            {diaries.map(
              ({ mainImage, title, body }: QueryType, index: number) => (
                <CardDairies
                  src={mainImage ?? "/no-profile.webp"}
                  title={title}
                  // body={diaries[0].body.substring(0, 160)}
                  body={body ?? "Magic Marble Foundation"}
                />
              )
            )}
          </div>
          <div className="flex justify-center">
            <Link href={"/diaries"}>
              <Button>Go to Dairies</Button>
            </Link>
          </div>
        </LayoutY>
      </Container>
    </EnterSection>
  );
};

export default MagicDairies;
