import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardTeam from "./CardTeam";
import { getAllFiltter } from "@/client";



export async function TabsTeam() {
  const board = await getAllFiltter("board", "board");
  const countryCoordinator = await getAllFiltter("board", "country");
  const advisoryBoard = await getAllFiltter("board", "advisory")


  return (
    <Tabs defaultValue="board" className="w-full text-gray-500">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="board"><span className="text-wrap">Board</span></TabsTrigger>
        <TabsTrigger value="country"><span className="text-wrap">Country Coordinators</span></TabsTrigger>
        <TabsTrigger value="advisors"><span className="text-wrap">Advisory Board</span></TabsTrigger>
      </TabsList>

      <TabsContent value="board" className="flex flex-row flex-wrap">
        {board.map((member: any) => {
          return (
            <CardTeam
              image={member.mainImage}
              name={member.name}
              post={member.post}
              email={member.email}
              body={member.body}
              key={member.name}
            />
          );
        })}
      </TabsContent>
      <TabsContent value="country" className="flex flex-row flex-wrap">
        {countryCoordinator.map((member: any) => {
          return (
            <CardTeam
              image={member.mainImage}
              name={member.name}
              post={member.post}
              email={member.email}
              body={member.body}
              key={member.name}
            />
          );
        })}
      </TabsContent>

      <TabsContent value="advisors" className="flex flex-row flex-wrap">
        {advisoryBoard.map((member: any) => {
          return (
            <CardTeam
              image={member.mainImage}
              name={member.name}
              post={member.post}
              email={member.email}
              body={member.body}
              key={member.name}
            />
          );
        })}
      </TabsContent>

    </Tabs>
  );
}
