// Working...

const articles = [
  { id: 1, text: "MobX in practise", authors: [3] },
  { id: 33, text: "RxJS and redux-observable", authors: [1, 2, 3, 5, 6, 7] },
  { id: 23, text: "Firebase", authors: [7, 2, 3] },
  { id: 333, text: "Really cool article" },
  { id: 1234, text: "Ramda.js and Redux combined", authors: [2] },
  { id: 2, text: "CSS in JS", authors: [3, 5] },
];

const authors = [
  { id: 1, name: "Oliver" },
  { id: 2, name: "Jan" },
  { id: 3, name: "Jakub" },
  { id: 4, name: "Peter" },
  { id: 5, name: "Tomas" },
  { id: 6, name: "Drahoslav" },
  { id: 7, name: "Honza" },
];

const teams = [
  { id: 1, name: "Webscope 1", members: [1, 2, 3, 4] },
  { id: 2, name: "Webscope 2", members: [5, 6, 7] },
];

const getTeamArticlesDescription = (teamId: number): string => {
  let information: object = {};
  let memberText: string[] = [];

  // Create object with information

  teams.map((item) => {
    if (item.id === teamId) {
      item.members.forEach((member) => {
        const nameOfPersone: string = authors.filter(
          (item) => item.id === member
        )[0].name;

        articles.forEach((article) => {
          if (article.authors?.includes(member)) {
            memberText.push(`"${article.text}"`);
          }
        });

        information[nameOfPersone] = memberText;

        memberText = [];
      });
    }
  });

  // Making final string

  const normalInfo = (): string => {
    let string: string = "";
    const idx = Object.keys(information);

    for (let i = 0; i < idx.length; i++) {
      let objectWithIdx: string = information[idx[i]];

      string +=
        objectWithIdx.length === 0
          ? `${idx[i]} wrote 0 articles. `
          : objectWithIdx.length < 2
          ? `${idx[i]} wrote an article ${objectWithIdx}. `
          : objectWithIdx.length < 3
          ? `${idx[i]} wrote articles ${objectWithIdx[0]} and ${objectWithIdx[1]}. `
          : `${idx[i]} wrote articles ${objectWithIdx[0]}, ${
              objectWithIdx[1]
            } and ${objectWithIdx.length - 2} more. `;
    }
    return string;
  };
  return normalInfo();
};

console.log(getTeamArticlesDescription(1));
console.log(getTeamArticlesDescription(2));
