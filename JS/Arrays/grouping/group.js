const users = [
    { name: "Michel", team: 1 },
    { name: "Bob", team: 2 },
    { name: "Marie", team: 3 },
    { name: "Julie", team: 1 },
    { name: "Claire", team: 3 }
];

/* SOLUTION NAÏVE //
const teams = [];
const team1 = [];
const team2 = [];
const team3 = [];
users.forEach((user) => {
    if (user.team === 1) {
        team1.push(user.name);
    }
    if (user.team === 2) {
        team2.push(user.name);
    }
    if (user.team === 3) {
        team3.push(user.name);
    }
})

teams.push({team: 1, members: team1});
teams.push({team: 2, members: team2});
teams.push({team: 3, members: team3});
*/

// !! USE REDUCE !!
const teams = users.reduce((teams, user) => {
    const team = teams.find(item => item.team === user.team);
    if (!team) {
        teams.push({team: user.team, members: [user.name]});
    }
    else {
        team.members.push(user.name);
    }
    return teams;
}, []
)

console.log(teams);
/* Valeur attendue :
[ { team: 1, members: [ 'Michel', 'Julie' ] },
  { team: 2, members: [ 'Bob' ] },
  { team: 3, members: [ 'Marie', 'Claire' ] } ]
*/