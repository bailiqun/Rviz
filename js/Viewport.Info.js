/**
 * @author mrdoob / http://mrdoob.com/
 */

Viewport.Info = function ( editor ) {

	var signals = editor.signals;

	var container = new UI.Panel();
	container.setId( 'info' );
	container.setPosition( 'absolute' );
	container.setLeft( '10px' );
	container.setBottom( '10px' );
	container.setFontSize( '12px' );
	container.setColor( '#fff' );

    var statusText = new UI.Text( 'Connecting' ).setMarginLeft( '6px' );
    container.add( new UI.Text( 'Status:' ), statusText.setColor('#ffde4f'), new UI.Break() );

    // signals

	signals.connectChanged.add( update );

	function update( status ) {
		if (status == 'error') {

            statusText.setColor('#ff7365');

        }
		else if(status == 'connected') {

            statusText.setColor('#cbff94');

        }
        statusText.setValue(status);
	}

	return container;

};
