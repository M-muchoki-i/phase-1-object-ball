function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black","white"],
      Players: {
        "Allan Anderson": {
          Number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assisst: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          Number: 30,
          shoe: 14,
          points: 12,
          rebound: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          Number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        " Mason Plumlee": {
          Number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          Number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
        away: {
          teamName:"Charlotte Hornets",
          colors: ["Turquoise","Purple"],
          players: {
            "Jeff Adrien": {
              Number: 4,
              shoe: 18,
              points: 10,
              rebounds: 1,
              assists: 1,
              steals: 2,
              blocks: 7,
              slamDunks: 2,
            },
            "Bismak Biyombo": {
              Number: 0,
              shoe: 16,
              points: 12,
              rebounds: 4,
              assists: 7,
              steals: 7,
              blocks: 15,
              slamDunks: 10,
            },
            "DeSagna Diop": {
              Number: 2,
              shoe: 14,
              points: 24,
              rebounds: 12,
              assists: 12,
              steals: 4,
              blocks: 5,
              slamDunks: 5,
            },
            "Ben Gordon": {
              Number: 8,
              shoe: 15,
              points: 33,
              rebounds: 3,
              assists: 2,
              steals: 1,
              blocks: 1,
              slamDunks: 0,
            },
            "Brendan Haywood": {
              Number: 33,
              shoe: 15,
              points: 6,
              rebounds: 12,
              assists: 12,
              steals: 22,
              blocks: 5,
              slamDunks: 12,
            },
          },
        },
      },
    },
  };
}
console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
    return object["home"]["teamName"];
}

function awayTeamName() {
  let object = gameObject();
    return object["away"]["teamName"];
}
function homeTeamColors() {
  let object = gameObject();
  return object["home"]["colors"];
}
function awayTeamColors() {
  let object = gameObject();
  return object["away"]["colors"];
}
function players(playerName) {
  let object = gameObject();
  if (object.home.Players[playerName]) {
    return object.home.Players[playerName];
  } else if (object.away.Players[playerName]) {
    return object.away.Players[playerName];
  } else {
    ("no player");
  }
}


function numPointsScored(playerName) {
  let object = gameObject();
  for (let team in object) {
    if (object[team].players[playerName]) {
      return object[team].players[playerName].points;
    }
  }
  return null;
}
function shoeSize(playerName) {
  let object = gameObject();
  for (let team in object) {
    if (object[team].players[playerName]) {
      return object[team].Players[playerName].shoe;
    }
  }
}
function TeamColors(teamName) {
  let object = gameObject();
  for (let team in object) {
    if (object[team].teamName === teamName) {
      return object[team].colors;
    }
  }
}
function teamNames() {
  let object = gameObject();
  return [object.home.teamName, object.away.teamName];
}
function playerNumbers(teamName) {
  let object = gameObject();
  for (let team in object) {
    if (object[team].teamName === teamName) {
      return object[team].playerNumbers;
    }
  }
}
console.log(playerNumbers("Brooklyn Nets"));
function playerStats(playerName) {
  let object = gameObject();
  for (let team in object) {
    if (object[team].players[playerName]) {
      return object[team].players[playerName].playerStats;
    }
  }
}

function bigShoeRebounds() {
  let object = gameObject();
  let largerShoeSize = 0;
  let rebounds = 0;
  for (let team in object) {
    for (let player in object[team].players[player]) {
      let shoeSize = object[team].players[playerName].shoe;
      if (shoeSize > largerShoeSize) {
        largerShoeSize = shoeSize;
        rebounds = object[team].players[playerName].rebounds;
      }
    }
  }
  return rebounds;
}

function mostPointsScored() {
  let object = gameObject();
  let maxPoints = 0;
  let topPlayer = "";
  for (let team in object) {
    for (let player in object[team].players) {
      let points = object[team].players[player].points;
      if (points > maxPoints) {
        maxPoints = points;
        topPlayer = player;
      }
    }
  }

  return topPlayer;
}

console.log(mostPointsScored());

function playerWithLongestName() {
  let object = gameObject();
  let longestName = "";
  for (let team in object) {
    for (let player in object[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}

console.log(playerWithLongestName());
