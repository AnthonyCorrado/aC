angular.module('BeerImageService', [])

.factory('BeerImageService', function() {

    var beerImage = {};

    beerImage.getImage = function(style) {
        var image = {};
        switch (style) {
            case "Stout":
                image = "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/y6ToYBPBAI0FNpd/porter.png";
                break;
            case "Porter":
                image = "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/y6ToYBPBAI0FNpd/porter.png";
                break;
            case "Brown":
                image = "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/scaBy4snIEefdvc/brown.png";
                break;
            case "Amber":
                image = "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/spI5OHo77pnjz54/amber.png";
                break;
            case "Lager":
                image = "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/spI5OHo77pnjz54/amber.png";
                break;
            case "IPA":
                image = "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/16CWe64cxZsWvC3/ipa.png";
                break;
            case "American Lager":
                image = "https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/16CWe64cxZsWvC3/ipa.png";
                break;
            }
        return image;
    };
    return beerImage;
});