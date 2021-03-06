Balanced.Card = Balanced.FundingInstrument.extend({
    type_name: function() {
        return 'Card';
    }.property(),

    is_bank_account: false,

    description: function () {
        return '{0} ({1})'.format(
            this.get('last_four'),
            Balanced.Utils.toTitleCase(this.get('brand'))
        );
    }.property('last_four', 'brand'),

    displayName: function () {
        return '{0} ({1} {2})'.format(
            this.get('name'),
            this.get('last_four'),
            Balanced.Utils.toTitleCase(this.get('brand'))
        );
    }.property('name', 'last_four', 'brand'),

    debits_uri: function() {
        return this.get('customer.debits_uri');
    }.property('customer.debits_uri'),

    human_readable_expiration: function() {
        return this.get('expiration_month') + '/' + this.get('expiration_year');
    }.property('expiration_month', 'expiration_year'),

    card_number_with_xs: function() {
        return 'xxxx xxxx xxxx ' + this.get('last_four');
    }.property('last_four')
});

Balanced.TypeMappings.addTypeMapping('card', 'Balanced.Card');
