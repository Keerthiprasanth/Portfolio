import { useState, useEffect } from "react";

function Hobbies({ isLightMode }) {
  const [stats, setStats] = useState(null);

  // const [theme, setTheme] = useState(isLightMode);

  // useEffect(() => {
  //   setTheme(isLightMode);
  // }, [isLightMode]);

  useEffect(() => {
    fetch("https://api.chess.com/pub/player/keerthiprasanthr/stats")
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.error("Error fetching stats:", error));
  }, []);

  const [leetcodeStats, setLeetcodeStats] = useState(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/keerthi_prasanth")
      .then((response) => response.json())
      .then((data) => setLeetcodeStats(data))
      .catch((error) => console.error("Error fetching LeetCode stats:", error));
  }, []);

  return (
    <div>
      <section
        className="p-8 h-auto flex flex-col justify-center items-center bg-gray-100"
        id="hobbies"
      >
        <div className="max-w-3xl text-center mb-8">
          <h1 className="text-3xl text-gray-800 mb-4 font-semibold">Hobbies</h1>
          <p className="text-lg text-gray-700">
            Here are some of my hobbies that I enjoy in my free time. These
            activities provide a balance to my professional life and allow me to
            explore different interests.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Chess.com Stats
            </h1>
            <p className="text-base text-gray-700 mb-4">
              Being a chess player during school days, I didn't want to quit
              playing chess. Once in a while I play in chess.com and you can see
              my live stats below.
            </p>
            {stats ? (
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Rapid Chess
                  </h2>
                  <p>Last Rating: {stats.chess_rapid?.last?.rating || "NA"}</p>
                  <p>Best Rating: {stats.chess_rapid?.best?.rating || "NA"}</p>
                  <p>Wins: {stats.chess_rapid?.record?.win || "NA"}</p>
                  <p>Losses: {stats.chess_rapid?.record?.loss || "NA"}</p>
                  <p>Draws: {stats.chess_rapid?.record?.draw || "NA"}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Blitz Chess
                  </h2>
                  <p>Last Rating: {stats.chess_blitz?.last?.rating || "NA"}</p>
                  <p>Best Rating: {stats.chess_blitz?.best?.rating || "NA"}</p>
                  <p>Wins: {stats.chess_blitz?.record?.win || "NA"}</p>
                  <p>Losses: {stats.chess_blitz?.record?.loss || "NA"}</p>
                  <p>Draws: {stats.chess_blitz?.record?.draw || "NA"}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Tactics
                  </h2>
                  <p>
                    Highest Rating: {stats.tactics?.highest?.rating || "NA"}
                  </p>
                  <p>Lowest Rating: {stats.tactics?.lowest?.rating || "NA"}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Puzzle Rush
                  </h2>
                  <p>Best Score: {stats.puzzle_rush?.best?.score || "NA"}</p>
                  <p>Daily Score: {stats.puzzle_rush?.daily?.score || "NA"}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-700">Loading...</p>
            )}
          </div>

          <div className="bg-gray-200 p-4 rounded-lg">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Leetcode Stats
            </h1>
            <p className="text-base text-gray-700 mb-4">
              I prefer developing real time applications. But sometimes solving
              codes is also fun and here is my live stats from leetcode.{" "}
            </p>
            {leetcodeStats ? (
              <div className="text-base lg:text-lg text-gray-700">
                <p>
                  Total LeetCode Questions Solved:{" "}
                  {leetcodeStats.totalSolved || "NA"}
                </p>
                <p>
                  Total Easy Questions Solved:{" "}
                  {leetcodeStats.easySolved || "NA"}
                </p>
                <p>
                  Total Medium Questions Solved:{" "}
                  {leetcodeStats.mediumSolved || "NA"}
                </p>
                <p>
                  Total Hard Questions Solved:{" "}
                  {leetcodeStats.hardSolved || "NA"}
                </p>
                <p>Acceptance Rate: {leetcodeStats.acceptanceRate || "NA"}%</p>
                <p>Ranking: {leetcodeStats.ranking || "NA"}</p>
                <p>
                  Contribution Points:{" "}
                  {leetcodeStats.contributionPoints || "NA"}
                </p>
              </div>
            ) : (
              <p className="text-gray-700">Loading...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hobbies;
