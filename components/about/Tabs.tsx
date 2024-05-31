import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardTeam from "./CardTeam";
import { advisoryBoard, board, countryCoordinator } from "@/utils/members";

export function TabsTeam() {
  return (
    <Tabs defaultValue="board" className="w-full text-gray-500">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="board"><span className="text-wrap">Board</span></TabsTrigger>
        <TabsTrigger value="country"><span className="text-wrap">Country Coordinators</span></TabsTrigger>
        <TabsTrigger value="advisors"><span className="text-wrap">Advisory Board</span></TabsTrigger>
      </TabsList>

      <TabsContent value="board" className="flex flex-row flex-wrap">
        {board.map((member) => {
          return (
            <CardTeam
              image={member.image}
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
        {countryCoordinator.map((member) => {
          return (
            <CardTeam
              image={member.image}
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
        {advisoryBoard.map((member) => {
          return (
            <CardTeam
              image={member.image}
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
