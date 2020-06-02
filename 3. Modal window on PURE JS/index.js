const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://lh6.googleusercontent.com/proxy/Tkcw1FWm3N07S-AJ2Oa4q9yPri0p5WLv49CfRniz7Ue5HEDE6J2vZMnl6eQPr12-TcnO3eRu7-0Pzr4RBMTrnNAr3lEgAf1CV9mJkC7CSyzYaS9ryT5U3WeOz7AfFxY'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://ranok.ictv.ua/wp-content/uploads/sites/59/2020/01/03/imgonline-com-ua-Compressed-9a2swo5nTb4lam.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://fxmed.com.ua/wp-content/uploads/2019/10/shutterstock_1040578063.jpg'}
]

const toHTML = fruit => `
    <div class="col-4">
        <div class="card">
          <img src="${fruit.img}" height="240px" class="card-img-top" alt="${fruit.title}">
          <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
            <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
          </div>
        </div>
    </div>
`

function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({
    title: 'Цена на Товар',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Закрыть', type: 'primary', handler() {
            priceModal.close()
        }}
    ]
})

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id === id)

    if (btnType === 'price') {
        priceModal.setContent(`
            <p>Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>
        `)
        priceModal.open()
    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Вы уверены?',
            content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`
        }).then(() => {
            console.log('remove');
        }).catch(() => {
            console.log('Cancel');
        })
    }
})
