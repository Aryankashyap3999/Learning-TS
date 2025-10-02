/** 
 * Enums -> Enumerations
*/

enum TicketStatus {
    INTIALISED,
    CANCELED,
    PENDING,
    CLOSED
}

//  defines set of constants that are not going to change.

const Ticket =  {
    id: 1,
    title: 'new ticket',
    status: TicketStatus.INTIALISED
}

if(Ticket.status == TicketStatus.INTIALISED) {
    console.log("Done");
}

enum StatusCode  {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    Created = 201,
    BadRequest = 400
}

const response = {
    url: '',
    type: "GET",
    data: "some string",
    status: StatusCode.Success
}


