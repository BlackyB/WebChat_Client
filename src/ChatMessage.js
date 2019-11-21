import React from 'react'



export default ({ name, message, date, myself, think, highlight }) => {

	var global_Message = 'top ';
	var bubble_Message = 'message ';
	var signature_Message = 'light ';

	if (myself) {
		global_Message += 'align-right ';
		bubble_Message += 'own_Message ';
		if (highlight) {
			bubble_Message += 'highlight ';
		}
		signature_Message += 'margin-right ';
	} else {
		global_Message += 'align-left ';
		bubble_Message += 'other_Message ';
		if (highlight) {
			bubble_Message += 'highlight ';
		}
		signature_Message += 'margin-left ';
	}

	return (
		<div className={global_Message}>
			<div className={bubble_Message}>
				<em className={think ? "grey" : "black" }>{message}</em>
			</div>
			<p className={signature_Message}>{name} - {date}</p>
		</div>	
		)
	}
