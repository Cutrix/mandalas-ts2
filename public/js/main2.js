$('#lang').on('click', function() {
    console.log($(this).text().trim())
    switch ($(this).text().trim()) {
        case 'FR':
            doTranslate(FR)
            $(this).html(`<div class="layer-list-item empty" id="lang">
            <a href="#" class="">
                <div class="border">
                    <span class="">EN</span>
                </div>
            </a>
        </div>`)
            break;
        case 'EN':
            doTranslate(EN)
            $(this).html(`<div class="layer-list-item empty" id="lang">
            <a href="#" class="">
                <div class="border">
                    <span class="">FR</span>
                </div>
            </a>
        </div>`)
            break;
    }
})
