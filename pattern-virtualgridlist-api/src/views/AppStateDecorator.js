import {connect} from 'react-redux';

import {changeAlbum} from '../actions';

const mapStateToProps = ({datas}) => ({
	album: datas.album
});

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeAlbum: (album) => dispatch(changeAlbum(album))
	};
};

const AppStateDecorator = connect(mapStateToProps, mapDispatchToProps);

export default AppStateDecorator;
export {AppStateDecorator};
