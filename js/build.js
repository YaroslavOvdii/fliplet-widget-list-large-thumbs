$('.linked[data-thumb-l-item-id]').click(function (event) {
    event.preventDefault();

    var data = Fliplet.Widget.getData($(this).parents('[data-list-thumb-l-id]').data('list-thumb-l-id'));

    var itemData = _.find(data.items,{id: $(this).data('thumb-l-item-id')});

    if(!_.isUndefined(itemData) && (!_.isUndefined(itemData.linkAction) && !_.isEmpty(itemData.linkAction))) {
        Fliplet.Navigate.to(itemData.linkAction);
    }
});
