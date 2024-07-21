const notifications = [
{
    title: "THE GOOD SAMARITAN FOUNDATION TOURNAMENT SUCCESSFUL",
    paragraph: 
    "The Good Samaritan Foundation Tournament hosted by Member of Parliament for South, Hon Kabo Neale Sechele Morwaeng continue to make strides not only in the football and entertainment aspects but also in the lives of the community as a whole. This tournament was graced by Hon. Mp’s wife Ms. Phondy Morwaeng, Council Secretary Mr Olebile K. Mafala & Hon. Councillors for Kweneng District. This platform significantly boosts Molepolole’s economy more especially for local businesses from food vendors to team merchandise sellers as it is time to generate income for their families and infusing the local economy with needed cash flow. The event continues to attract more growth in terms of attendance and entertainment as notable attendees like DJ Ngwazi and former Township Rollers striker Sekhana Koko drew larger crowds and media attention, further benefiting local businesses. The event also fostered community pride and cohesion. The tournament is one of the events looked forward to as it fosters community pride and cohesion amongst the residents, its success sets a precedence for future events, showcasing the potential of sports to stimulate local economies, generating revenue and fostering local entrepreneurship. The tournament featured 16 football teams and 24 snooker teams, the attendees appreciated the games because of its impact and empowering the local sports programs.",
    imagelocator: "Samaritan"
}
];

const imagelist = [
{
    imagelocator: "Samaritan",
    description: "Hon Kabo Neale Sechele Morwaeng",
    imageUrl: "images/SAMARITAN1.webp"
},
{
    imagelocator: "Samaritan",
    description: "Raising the title",
    imageUrl: "images/SAMARITAN2.webp"
},
{
    imagelocator: "Samaritan",
    description: "Playing pool",
    imageUrl: "images/SAMARITAN3.webp"
},
{
    imagelocator: "Samaritan",
    description: "Happy for the title",
    imageUrl: "images/SAMARITAN4.webp"
},
{
    imagelocator: "Samaritan",
    description: "In the filed",
    imageUrl: "images/SAMARITAN5.webp"
},
{
    imagelocator: "Samaritan",
    description: "Togetherness",
    imageUrl: "images/SAMARITAN6.webp"
},
{
    imagelocator: "Samaritan",
    description: "Acknowledging players",
    imageUrl: "images/SAMARITAN7.webp"
},
{
    imagelocator: "Samaritan",
    description: "Acknowledging players 2",
    imageUrl: "images/SAMARITAN8.webp"
}
];

loadNotifications()

function loadNotifications()
{
    const section = document.querySelector('section')
    while (section.hasChildNodes()) 
    {
        section.removeChild(section.firstChild);
    }   

    const header = document.createElement("h1")
    header.innerText = `Notifications`
    section.appendChild(header)
    
    notifications.map(createNote)

    function createNote(note) 
    {
        
        const title = note.title;
        const paragraph = note.paragraph;
        const imagelocator = note.imagelocator;

        const heading = document.createElement("h3")
        heading.innerHTML = title
        section.appendChild(heading)

        const para = document.createElement("p")
        para.innerHTML = paragraph
        section.appendChild(para)
        
        const imagestodisplay =  imagelist.filter(img => img.imagelocator == imagelocator)
        imagestodisplay.map(createImg)
        function createImg(image) 
        {
            const art = document.createElement("article")

            const description = image.description;
            const imageUrl = image.imageUrl;
            
            const url_tag = document.createElement("img")
            url_tag.setAttribute("src",imageUrl)
            url_tag.setAttribute("alt",description)
            url_tag.loading="lazy"
            art.appendChild(url_tag)
            
            section.appendChild(art)
        }
    }
}