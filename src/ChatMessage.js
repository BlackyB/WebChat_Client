import React from 'react'

export default ({ name, message, date, myself, think }) => 
<>	
<div className={myself ? "align-right top" : 'align-left top'}>
	<div className={myself ? "Message own_Message" : 'Message other_Message'}>
	<br/>
	<em className={think ? 'grey' : '' }>{message}</em>
	</div>
		<p className={myself ? "margin-right light" : 'margin-left light'}>{name} - {date}</p>
</div>
</>