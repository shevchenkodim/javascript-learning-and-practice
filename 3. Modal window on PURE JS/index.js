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
            <a href="#" class="btn btn-primary">Посмотреть цену</a>
            <a href="#" class="btn btn-danger">Удалить</a>
          </div>
        </div>
    </div>
`

function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html
}

render()

const modal = $.modal({
    title: 'Dmytro Modal',
    closable: true,
    content: `
        <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked');
        }},
        {text: 'Cansel', type: 'danger', handler() {
            console.log('Danger btn clicked');
            modal.close()
        }}
    ]
})
