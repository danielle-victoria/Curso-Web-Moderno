/* Aula 30 - Bootstrap/jQuery/Webpack:  Carregando HTML via Ajax (Includes)
  */

import $ from 'jquery'

function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include') //Evita que a propriedade seja interpretada duas vezes

                loadIncludes(e)
            }
        })
    })
}

loadIncludes()