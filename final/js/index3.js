YUI().use('dd-drop', 'dd-constrain', function(Y) {
    var data = {
        'drag1': {'<br><br><br>level': '<br><br><div class="w3-light-grey"><div class="w3-container w3-green w3-center" style="width:20%">20%</div></div>'},
        'drag2': {'<br><br><br>level': '<br><br><div class="w3-light-grey"><div class="w3-container w3-green w3-center" style="width:40%">40%</div></div>'},
        'drag3': {'<br><br><br>level': '<br><br><div class="w3-light-grey"><div class="w3-container w3-green w3-center" style="width:60%">60%</div></div>'},
        'drag4': {'<br><br><br>level': '<br><br><div class="w3-light-grey"><div class="w3-container w3-green w3-center" style="width:80%">80%</div></div>'},
        'drag5': {'<br><br><br>level': '<br><br><div class="w3-light-grey"><div class="w3-container w3-green w3-center" style="width:100%">100%</div></div>'},
    };
    var drags = Y.Node.all('#play div.drag');
    drags.each(function(v, k) {
        var thisData = {};
        Y.mix(thisData, data[v.get('id')]);
        var dd = new Y.DD.Drag({
            node: v,
            dragMode: 'intersect',
            data: thisData
        }).plug(Y.Plugin.DDConstrained, {
            constrain2node: '#play'
        });
        dd.on('drag:end', function(e) {
            e.preventDefault();
        });
    });

    var drop = new Y.DD.Drop({
        node: '#drop'
    });
    var i= 0;
    drop.on('drop:hit', function(e) {
        var drag = e.drag;
        var data = drag.get('data');
        var out = ['id: ' + drag.get('node').get('id')];
        Y.each(data, function(v, k) {
            out[out.length] = k + ': ' + v;
        });

        $('#drop').css("background-color","#8DD5E7");
        
        // var str = '<img src="img/monster3.png" alt="monster1"> ' + out.join(', ') + '';
        // this.get('node').set('innerHTML', str);

        
    

        
    });
});