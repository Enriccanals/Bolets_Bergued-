ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25831").setExtent([354487.528309, 4634094.084856, 450631.323135, 4685717.686030]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Potencialgenricodesetas_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Potencial genérico de setas<br />\
    <img src="styles/legend/Potencialgenricodesetas_1_0.png" /> Fuera del hábitat o rango considerado (0)<br />\
    <img src="styles/legend/Potencialgenricodesetas_1_1.png" /> Potencial bajo (>0–40)<br />\
    <img src="styles/legend/Potencialgenricodesetas_1_2.png" /> Potencial medio (>40–60)<br />\
    <img src="styles/legend/Potencialgenricodesetas_1_3.png" /> Potencial alto (>60–80)<br />\
    <img src="styles/legend/Potencialgenricodesetas_1_4.png" /> Potencial muy alto (>80–100)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Potencialgenricodesetas_1.png",
            attributions: ' ',
            projection: 'EPSG:25831',
            alwaysInRange: true,
            imageExtent: [385250.000000, 4639000.000000, 423400.000000, 4686250.000000]
        })
    });
var format_bergueda_2 = new ol.format.GeoJSON();
var features_bergueda_2 = format_bergueda_2.readFeatures(json_bergueda_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_bergueda_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bergueda_2.addFeatures(features_bergueda_2);
var lyr_bergueda_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bergueda_2, 
                style: style_bergueda_2,
                popuplayertitle: 'bergueda',
                interactive: false,
                title: '<img src="styles/legend/bergueda_2.png" /> bergueda'
            });
var format_carreteras_bergued_2026_3 = new ol.format.GeoJSON();
var features_carreteras_bergued_2026_3 = format_carreteras_bergued_2026_3.readFeatures(json_carreteras_bergued_2026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_carreteras_bergued_2026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carreteras_bergued_2026_3.addFeatures(features_carreteras_bergued_2026_3);
var lyr_carreteras_bergued_2026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_carreteras_bergued_2026_3, 
                style: style_carreteras_bergued_2026_3,
                popuplayertitle: 'carreteras_bergued_2026',
                interactive: false,
    title: 'carreteras_bergued_2026<br />\
    <img src="styles/legend/carreteras_bergued_2026_3_0.png" /> motorway<br />\
    <img src="styles/legend/carreteras_bergued_2026_3_1.png" /> primary<br />\
    <img src="styles/legend/carreteras_bergued_2026_3_2.png" /> secondary<br />\
    <img src="styles/legend/carreteras_bergued_2026_3_3.png" /> tertiary<br />\
    <img src="styles/legend/carreteras_bergued_2026_3_4.png" /> trunk<br />' });
var format_poblaciones_bergued_4 = new ol.format.GeoJSON();
var features_poblaciones_bergued_4 = format_poblaciones_bergued_4.readFeatures(json_poblaciones_bergued_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_poblaciones_bergued_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblaciones_bergued_4.addFeatures(features_poblaciones_bergued_4);
var lyr_poblaciones_bergued_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poblaciones_bergued_4, 
                style: style_poblaciones_bergued_4,
                popuplayertitle: 'poblaciones_bergued',
                interactive: true,
    title: 'poblaciones_bergued<br />\
    <img src="styles/legend/poblaciones_bergued_4_0.png" /> town<br />\
    <img src="styles/legend/poblaciones_bergued_4_1.png" /> village<br />' });
var format_comarques_catalunya_5 = new ol.format.GeoJSON();
var features_comarques_catalunya_5 = format_comarques_catalunya_5.readFeatures(json_comarques_catalunya_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_comarques_catalunya_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comarques_catalunya_5.addFeatures(features_comarques_catalunya_5);
var lyr_comarques_catalunya_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comarques_catalunya_5, 
                style: style_comarques_catalunya_5,
                popuplayertitle: 'comarques_catalunya',
                interactive: false,
                title: '<img src="styles/legend/comarques_catalunya_5.png" /> comarques_catalunya'
            });
var group_Capasdetrabajo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Capas de trabajo'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Potencialgenricodesetas_1.setVisible(true);lyr_bergueda_2.setVisible(true);lyr_carreteras_bergued_2026_3.setVisible(true);lyr_poblaciones_bergued_4.setVisible(true);lyr_comarques_catalunya_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Potencialgenricodesetas_1,lyr_bergueda_2,lyr_carreteras_bergued_2026_3,lyr_poblaciones_bergued_4,lyr_comarques_catalunya_5];
lyr_bergueda_2.set('fieldAliases', {'fid': 'fid', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CAPCOMIND': 'CAPCOMIND', 'AREAC5000': 'AREAC5000', 'X': 'X', 'Y': 'Y', });
lyr_carreteras_bergued_2026_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'subtype': 'subtype', 'class': 'class', 'length_m': 'length_m', });
lyr_poblaciones_bergued_4.set('fieldAliases', {'fid': 'fid', 'capital': 'capital', 'ele': 'ele', 'name': 'name', 'place': 'place', 'population': 'population', });
lyr_comarques_catalunya_5.set('fieldAliases', {'fid': 'fid', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CAPCOMIND': 'CAPCOMIND', 'AREAC5000': 'AREAC5000', 'X': 'X', 'Y': 'Y', });
lyr_bergueda_2.set('fieldImages', {'fid': 'TextEdit', 'CODICOMAR': 'TextEdit', 'NOMCOMAR': 'TextEdit', 'CAPCOMAR': 'TextEdit', 'CAPCOMIND': 'TextEdit', 'AREAC5000': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_carreteras_bergued_2026_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'subtype': 'TextEdit', 'class': 'TextEdit', 'length_m': 'TextEdit', });
lyr_poblaciones_bergued_4.set('fieldImages', {'fid': 'TextEdit', 'capital': 'TextEdit', 'ele': 'TextEdit', 'name': 'TextEdit', 'place': 'TextEdit', 'population': 'TextEdit', });
lyr_comarques_catalunya_5.set('fieldImages', {'fid': 'TextEdit', 'CODICOMAR': 'TextEdit', 'NOMCOMAR': 'TextEdit', 'CAPCOMAR': 'TextEdit', 'CAPCOMIND': 'TextEdit', 'AREAC5000': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_bergueda_2.set('fieldLabels', {'fid': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CAPCOMIND': 'no label', 'AREAC5000': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_carreteras_bergued_2026_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'subtype': 'no label', 'class': 'no label', 'length_m': 'no label', });
lyr_poblaciones_bergued_4.set('fieldLabels', {'fid': 'hidden field', 'capital': 'hidden field', 'ele': 'hidden field', 'name': 'inline label - visible with data', 'place': 'hidden field', 'population': 'hidden field', });
lyr_comarques_catalunya_5.set('fieldLabels', {'fid': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CAPCOMIND': 'no label', 'AREAC5000': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_comarques_catalunya_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});