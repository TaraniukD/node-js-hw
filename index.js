
const {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  } = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action, <type>", "choose action")
  .option("-i, --id, <type>", "user id")
  .option("-n, --name, <type>", "user name")
  .option("-e, --email, <type>", "user email")
  .option("-p, --phone, <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        try {
            const allContacts = await listContacts();
            return console.table(allContacts);
          } catch (error) {
            console.log(error);
          }
      break;

    case "get":
      const oneContact = await getContactById(id);
      return console.table(oneContact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      return console.table(newContact);
      break;

    case "remove":
      const removeBook = await removeContact(id)
      return console.table(removeBook)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({action: "list", id: '05olLMgyVQdWRwgKfg5J6'});
// invokeAction({action: "get", id: '05olLMgyVQdWRwgKfg5J6'});
// invokeAction({action: "add", name: "myBook", email: "myBook@net", phone: "123456" });
invokeAction({action: "remove", id: '1DEXoP8AuCGYc1YgoQ6hw'});