const cardTimeLinks = document.querySelector('.card__time-links');

const times = ['12:10', '12:20', '12:30', '12:40', '12:50', '13:00', '13:10', '13:20'];

function createLink(textContent) {
    const link  = document.createElement("a");        
        link.textContent = textContent;
        link.setAttribute('href', '#')
        link.classList.add('card__time-link');
        return link
}

function renderTime(arrTimes) {
    arrTimes.slice(0,3).forEach(el => {
        cardTimeLinks.append(createLink(el));
    })

    const showMoreLink = createLink('ещё...');
    cardTimeLinks.append(showMoreLink);

    showMoreLink.addEventListener('click', (e) => {
        e.preventDefault();
        showMoreLink.remove();
        const span = cardTimeLinks.cloneNode(false);
        console.log('span: ', span);
        cardTimeLinks.parentElement.append(span)

        arrTimes.slice(4).forEach(el => {
            span.append(createLink(el));
        })
    })
}

renderTime(times, cardTimeLinks);
 
