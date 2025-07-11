const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No Argument");
}
else if (args.length === 1) {
  console.log("1 Argument")
} 
else {
  console.log(`${args.length} arguments`);
}