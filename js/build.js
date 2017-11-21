$('.linked[data-thumb-l-item-id]').click(function(event) {
  event.preventDefault();

  if ($(this).parents('.list-swipe.swiping').length) {
    return;
  }

  var data = Fliplet.Widget.getData($(this).parents('[data-list-thumb-l-id]').data('list-thumb-l-id'));
  var itemData = _.find(data.items, {
    id: $(this).data('thumb-l-item-id')
  });

  if (!_.isUndefined(itemData) && (!_.isUndefined(itemData.linkAction) && !_.isEmpty(itemData.linkAction))) {
    Fliplet.Navigate.to(itemData.linkAction);
  }
});

$('[data-list-thumb-l-id]').each(function() {
  var data = Fliplet.Widget.getData($(this).attr('data-list-thumb-l-id'));
  if (data.swipeToSave) {
    window.ui = window.ui || {};
    window.ui['swipeSavedList' + $(this).attr('data-list-thumb-l-uuid')] = new SwipeSaveList(this, {
      savedListLabel: data.swipeToSaveLabel || 'My list'
    });
  }
});
