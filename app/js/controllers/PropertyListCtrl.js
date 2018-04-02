angular.module('nuageInvestment').controller('PropertyListCtrl', ['$scope', '$element',
    function($scope, $element) {
        'use strict';
        $scope.cities = ["ABINGTON", "ACUSHNET CENTER", "ADAMS", "AGAWAM", "AMESBURY", "AMHERST CENTER", "ANDOVER", "ARLINGTON", "ATHOL", "ATTLEBORO", "AYER", "BALDWINVILLE", "BARNSTABLE TOWN", "BARRE", "BELCHERTOWN", "BELLINGHAM", "BELMONT", "BEVERLY", "BLISS CORNER", "BONDSVILLE", "BOSTON", "BOURNE", "BOXFORD", "BRAINTREE", "BREWSTER", "BRIDGEWATER", "BROCKTON", "BROOKLINE", "BURLINGTON", "BUZZARDS BAY", "CAMBRIDGE", "CHATHAM", "CHELSEA", "CHICOPEE", "CLINTON", "COCHITUATE", "CORDAVILLE", "DANVERS", "DEDHAM", "DENNIS", "DENNIS PORT", "DOVER", "DUXBURY", "EAST BROOKFIELD", "EAST DENNIS", "EAST DOUGLAS", "EAST FALMOUTH", "EASTHAMPTON", "EAST HARWICH", "EAST PEPPERELL", "EAST SANDWICH", "ESSEX", "EVERETT", "FALL RIVER", "FALMOUTH", "FISKDALE", "FITCHBURG", "FORESTDALE", "FORT DEVENS", "FOXBOROUGH", "FRAMINGHAM", "FRANKLIN", "GARDNER", "GLOUCESTER", "GRANBY", "GREAT BARRINGTON", "GREENFIELD", "GREEN HARBOR-CEDAR CREST", "GROTON", "HANSON", "HARWICH CENTER", "HARWICH PORT", "HATFIELD", "HAVERHILL", "HINGHAM", "HOLBROOK", "HOLLAND", "HOLYOKE", "HOPEDALE", "HOPKINTON", "HOUSATONIC", "HUDSON", "HULL", "IPSWICH", "KINGSTON", "LAWRENCE", "LEE", "LENOX", "LEOMINSTER", "LEXINGTON", "LITTLETON COMMON", "LONGMEADOW", "LOWELL", "LUNENBURG", "LYNN", "LYNNFIELD", "MALDEN", "MANSFIELD CENTER", "MARBLEHEAD", "MARION CENTER", "MARLBOROUGH", "MARSHFIELD", "MARSHFIELD HILLS", "MASHPEE NECK", "MATTAPOISETT CENTER", "MAYNARD", "MEDFIELD", "MEDFORD", "MELROSE", "METHUEN", "MIDDLEBOROUGH CENTER", "MILFORD", "MILLERS FALLS", "MILLIS-CLICQUOT", "MILTON", "MONOMOSCOY ISLAND", "MONSON CENTER", "MONUMENT BEACH", "NAHANT", "NANTUCKET", "NEEDHAM", "NEW BEDFORD", "NEWBURYPORT", "NEW SEABURY", "NEWTON", "NORTH ADAMS", "NORTH AMHERST", "NORTHAMPTON", "NORTH ATTLEBOROUGH CENTER", "NORTHBOROUGH", "NORTH BROOKFIELD", "NORTH EASTHAM", "NORTH FALMOUTH", "NORTHFIELD", "NORTH LAKEVILLE", "NORTH PEMBROKE", "NORTH PLYMOUTH", "NORTH SCITUATE", "NORTH SEEKONK", "NORTHWEST HARWICH", "NORTH WESTPORT", "NORTON CENTER", "NORWOOD", "OCEAN BLUFF-BRANT ROCK", "OCEAN GROVE", "ONSET", "ORANGE", "ORLEANS", "OXFORD", "PALMER", "PEABODY", "PEPPERELL", "PINEHURST", "PITTSFIELD", "PLYMOUTH", "POCASSET", "POPPONESSET", "POPPONESSET ISLAND", "PROVINCETOWN", "QUINCY", "RANDOLPH", "RAYNHAM CENTER", "READING", "REVERE", "ROCKPORT", "ROWLEY", "RUTLAND", "SAGAMORE", "SALEM", "SALISBURY", "SANDWICH", "SAUGUS", "SCITUATE", "SEABROOK", "SECONSETT ISLAND", "SHARON", "SHELBURNE FALLS", "SHIRLEY", "SMITH MILLS", "SOMERSET", "SOMERVILLE", "SOUTH AMHERST", "SOUTH ASHBURNHAM", "SOUTHBRIDGE", "SOUTH DEERFIELD", "SOUTH DENNIS", "SOUTH DUXBURY", "SOUTH LANCASTER", "SOUTH YARMOUTH", "SPENCER", "SPRINGFIELD", "STONEHAM", "STURBRIDGE", "SWAMPSCOTT", "TAUNTON", "TEATICKET", "THREE RIVERS", "TOPSFIELD", "TOWNSEND", "TURNERS FALLS", "UPTON-WEST UPTON", "VINEYARD HAVEN", "WAKEFIELD", "WALPOLE", "WALTHAM", "WARE", "WAREHAM CENTER", "WARREN", "WATERTOWN", "WEBSTER", "WELLESLEY", "WESTBOROUGH", "WEST BROOKFIELD", "WEST CHATHAM", "WEST CONCORD", "WEST DENNIS", "WEST FALMOUTH", "WESTFIELD", "WEST SPRINGFIELD", "WEST WAREHAM", "WEST YARMOUTH", "WEWEANTIC", "WEYMOUTH", "WHITE ISLAND SHORES", "WHITINSVILLE", "WILBRAHAM", "WILLIAMSTOWN", "WILMINGTON", "WINCHENDON", "WINCHESTER", "WINTHROP", "WOBURN", "WOODS HOLE", "WORCESTER", "YARMOUTH PORT"];
        $scope.searchTerm;
        $scope.clearSearchTerm = function() {
          $scope.searchTerm = '';
        };
        $scope.selectedCity = '';
        // The md-select directive eats keydown events for some quick select
        // logic. Since we have a search input here, we don't need that logic.
        $element.find('input').on('keydown', function(ev) {
          ev.stopPropagation();
        });

    }]);