const parseNPMVersion = (string: string) => {
  const element =
    string[0] === "@" ? string.slice(1).split("@") : string.split("@");

  return { name: element[0], version: element[1] };
};

console.log(parseNPMVersion("react@16.0.0"));
console.log(parseNPMVersion("@webscopeio/react-textarea-autocomplete@4.6.1"));
