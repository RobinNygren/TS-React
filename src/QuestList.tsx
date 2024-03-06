import { useState } from "react";

type NPC = {};

type Quest = {
  id: number;
  complete: boolean;
  description: string;
  reward: string;
  xpReward?: 50 | 150 | 750;
  questGiver?: NPC | false;
};

const QuestList = () => {
  const startQuests: Quest[] = [
    {
      id: 1,
      complete: false,
      description: "slay the dragon",
      reward: "bloodrite axe",
      xpReward: 50,
    },
    {
      id: 2,
      complete: true,
      description: "Save the princess",
      reward: "serpent shoulders",
      xpReward: 750,
    },
    {
      id: 3,
      complete: false,
      description: "Find the treasure",
      reward: "dark iron helmet",
      xpReward: 150,
    },
  ];

  const [quests, setQuests] = useState(startQuests);

  return (
    <>
      <h1>QuestList</h1>
      {quests.map((q: Quest) => {
        return (
          <ul>
            <li key={q.id}>
              {q.complete ? (
                <span
                  onClick={() => {
                    setQuests(
                      quests.map((quest) => {
                        if (quest.id === q.id) return { ...q, complete: false };
                        else return quest;
                      })
                    );
                  }}
                >
                  ✅
                </span>
              ) : (
                <span
                  onClick={() => {
                    setQuests(
                      quests.map((quest) => {
                        if (quest.id === q.id) return { ...q, complete: true };
                        else return quest;
                      })
                    );
                  }}
                >
                  ❌
                </span>
              )}
              {""}
              {q.description}
            </li>
            <li>{q.reward}</li>
            <li>{q.xpReward}</li>
          </ul>
        );
      })}
    </>
  );
};

export default QuestList;
