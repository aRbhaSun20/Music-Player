import React, { Component } from "react";
import MailFrom from "./MailFrom";
import MailTo from "./MailTo";
import MailSubject from './MailSubject'
import MailText from './MailText'
import BackEnd from "./BackEnd";

class MailComp extends Component {
	MailComp = {
		From: {
			Email: "",
			Password: "",
		},
		To: {
			Email: "",
		},
		Subject: "",
		Text: "",
	};

	FromAddress = (mailFrom) => {
		this.MailComp.From.Email = mailFrom.Email;
		this.MailComp.From.Password = mailFrom.Password;
	};

	ToAddress = (mailTo) => {
		this.MailComp.To.Email = mailTo.Email;
		this.RenderMail(this.MailComp);
	};

	Subject = (mailSub) => {
		this.MailComp.Subject = mailSub.Subject;
	};

	Text = (mailText) => {
		this.MailComp.Text = mailText.Text;
		// console.log(mailText)
	};

	RenderMail = (data) => {
		this.refs.backend.showAlert(data);
	};

	render() {
		return (
			<div>
				<MailFrom FromAddress={this.FromAddress} />
				<MailSubject Subject={this.Subject}/>
				<MailText Text={this.Text}/>
				<MailTo ToAddress={this.ToAddress} />
				<BackEnd SendComp={this.MailComp} ref="backend" />
			</div>
		);
	}
}

export default MailComp;
