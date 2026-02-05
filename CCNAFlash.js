const flashcards = [
  { front: 'What is the process of converting information into the proper form for transmission?', back: 'Encoding'},
  { front: 'Which step of the communication process is concerned with properly identifying the address of the sender and the receiver?', back: 'Formatting'},
  { front: 'Which three are components of message timing?', back: 'Flow Control, Access Method, Response Timeout'},
  { front: 'Which delivery method is used to transmit information to one or more end devices, but not all devices on the network?', back: 'Multicast'},
  { front: 'BGP and OSPF are examples of which type of protocol?', back: 'Routing'},
  { front: 'Which two protocols are service discovery protocols?', back: 'DNS, DHCP'},
  { front: 'What is the purpose of the sequencing function in network communication?', back: 'To label transmitted segments of data for proper reassembly'},
  { front: 'This protocol is responsible for guaranteeing the reliable delivery of inrformation', back: 'TCP'},
  { front: 'UDP and TCP belong to which layer of the TCP/IP protocol?', back: 'Transport'},
  { front: 'Which two protocols belong in the TCP/IP model application layer?', back: 'DNS, DHCP'},
  { front: 'Which protocol operates at the network access layer of the TCP/IP model?', back: 'Ethernet'},
  { front: 'Which are protocols that provide feedback from the destination host to the source host regarding error in packet delivery?', back: 'ICMPv4, ICMPv6'},
  { front: 'A device recieves a data link frame and processes and removes the Ethernet information. What information would be the next to be processed by the receiving end?', back: 'IP at the internet layer'},
  { front: 'Which services are provided by the internet layer of the TCP/IP protocol suite?', back: 'Routing protocols, Messaging, Internet protocol'},
  { front: 'True or False: Standards orginizations are usually vendor neutral.', back: 'True'},
  { front: 'This standards organization is concerned with the Request For Comments documents that specify new protocols and update existing ones.', back: 'Internet Engineering Task Force (IETF)'},
  { front: 'This standards organization is responsible for IP address allocation and domain name management', back: 'Internet Assigned Numbers Authoriy (IANA)'},
  { front: 'What types of standards are developed by the Electronics Industires Alliance (EIA)? ', back: 'Eleectric Wiring and Connectors'},
  { front: 'What is the process of dividing a large data stream into smaller pieces prior to transmission?', back: 'Segmentation'},
  { front: 'What is the PDU associated with the transport layer?', back: 'Segment'},
  { front: 'Which protocol stack layer encapsulates data into frames? ', back: 'Data Link'},
  { front: 'What is the name of the process of adding protocol information to data as it moves down the protocol stack', back: 'Encapsulation'},
  { front: 'True or False: Frames exchanged between devices in different IP networks must be forwarded to a default gateway.', back: 'True'},
  { front: 'True or False: The right most part of the IP address is used to identify the network that a device belongs to.', back: 'False'},
  { front: 'What is used to determine the network portion of an IPv4 address?', back: 'Subnet Mask'},
  { front: 'True or False: Network layer addresses are logical and Data Link layer are expressed as 12 hexadecimal digits.', back: 'True'},
  { front: 'True or False: Data Link layer addresses are physical.', back: 'True'},
  { front: 'True or False: Network layer addresses are either 32 or 128 bits in length', back: 'True'},
  { front: 'What is the order of the two addresses in the Data Link frame?', back: 'Destination MAC, Source MAC'},
  { front: 'True or False: Data Link addresses are physical so they never change in the Data Link frame from source to destination', back: 'False'},
  { front: 'Which three acronyms/initialisms represent standards organizations?', back: 'IANA, IEEE, IETF'},
  { front: 'What type of communication will send a message to all devices on a local area network?', back: 'Broadcast'},
  { front: 'In computer communication, what is the purpose of message encoding?', back: 'To convert information to the approriate form for transmission'},
  { front: 'Which message delivery option is used when all devices need to receive the same message simultaneously?', back: 'Broadcast'},
  { front: 'What are two benefits of using a layered network model?', back: 'It assists in protocol design, it prevents technology in one layer from affecting the other layers'},
  { front: 'What is the purpose of protocols in data communications?', back: 'Providing the rules required for a specific type of communication to occur'},
  { front: 'Which logical address is used for delivery of data to a remote network?', back: 'Destination IP address'},
  { front: 'What is the general term that is used to describe a piece of data at any layer of a networking model?', back: 'Protocol Data Unit'},
  { front: 'Which two protocols function at the internet layer?', back: 'ICMP, IP'},
  { front: 'Which layer of the OSI model defines services to segment and reassemble data for individual communications between end devices?', back: 'Transport'},
  { front: 'Which type of communication will send a message to a group of host destinations simultaneously?', back: 'Multicast'},
  { front: 'What process is used to receive transmitted data and convert it into a readable message?', back: 'Decoding'},
  { front: 'What is done to an IP packet before it is transmitted over the physical medium?', back: 'IT is encapsulated in a Layer 2 frame'},
  { front: 'What process is used to place one message inside another message for transfer from the source to the destination?', back: 'Encapsulation'},
  { front: 'A web client is sending a request for a webpage to a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to prepare the request for transmission?', back: 'HTTP, TCP, IP, Ethernet'},
];

let remainingIndexes = [...Array(flashcards.length).keys()]; // Stores indexes instead of modifying original array
let currentCardIndex = -1;

const front = document.querySelector('.flashcard .front');
const back = document.querySelector('.flashcard .back');
const flipBtn = document.getElementById('flip-btn');
const nextBtn = document.getElementById('next-btn');

document.addEventListener("DOMContentLoaded", () => {
    getRandomCard();
    updateCard();
    showFront();
});

function updateCard() {
  if (remainingIndexes.length === 0) {
    front.textContent = 'All questions have been answered!';
    back.textContent = '';
    nextBtn.disabled = true;
    return;
  }

  front.textContent = flashcards[currentCardIndex].front;
  back.textContent = flashcards[currentCardIndex].back;
}

function showFront() {
  front.style.display = 'block';
  back.style.display = 'none';
}

function showBack() {
  front.style.display = 'none';
  back.style.display = 'block';
}

function getRandomCard() {
  if (remainingIndexes.length === 0) return;

  let randomIndex = Math.floor(Math.random() * remainingIndexes.length);
  currentCardIndex = remainingIndexes[randomIndex]; // Get the actual flashcard index
  remainingIndexes.splice(randomIndex, 1); // Remove index so it's not picked again
}

nextBtn.addEventListener('click', () => {
  getRandomCard();
  updateCard();
  showFront();
});

flipBtn.addEventListener('click', () => {
  if (back.style.display === 'block') { 
    showFront();
  } else {
    showBack();
  }
});
