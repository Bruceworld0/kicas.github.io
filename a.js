
// Test data
const objTest = {
fruits: ['apple', 'banana', 'peach', 'mango', 'kiwi'],
vehicles: ['Airplain', 'Scooter', 'Bus', 'Train', 'Van'],
brands: ['Apple', 'Google', 'Microsoft', 'Amazon', 'Tesla'],
footballPlayers: ['Pele', 'Maradona', 'Messi', 'Ronaldo', 'Ronaldinho']
};

$(function() {
init();

$(document).on('change', 'select[name=sbx_class]', function() {
const classVal = $(this).val();
$('select[name=sbx_item] option').each(function(idx, item) {
if ($(this).data('class') == classVal || $(this).val() == '') {
	$(this).show();
} else {
	$(this).hide();
}
});
$('select[name=sbx_item]').val('');
})
});

// Selectbox option 생성
function init() {
let sClassHtml = '<option value="">선택하세요.</option>';
let sItemHtml = '<option value="">선택하세요.</option>';

for (const key in objTest) {
sClassHtml += `<option value="${key}">${key}</option>`;

const list = objTest[key];
for (let i = 0; i < list.length; i++) {
sItemHtml += `<option value="${list[i]}" data-class="${key}">${list[i]}</option>`;
}
}
$('select[name=sbx_class]').html(sClassHtml);
$('select[name=sbx_item]').html(sItemHtml);

$('select[name=sbx_item] option').each(function(idx, item) {
if ($(this).val() == '') return true;
$(this).hide();
});
}
