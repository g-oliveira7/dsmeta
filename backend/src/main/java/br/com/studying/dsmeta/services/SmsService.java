package br.com.studying.dsmeta.services;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import br.com.studying.dsmeta.entities.Sale;

@Service
public class SmsService {

	@Value("${twilio.sid}") private String twilioSid;
	@Value("${twilio.token}") private String twilioToken;
	@Value("${twilio.phone.from}") private String twilioPhoneFrom;
	@Value("${twilio.phone.to}") private String twilioPhoneTo;
	
	@Autowired private SaleService saleService;
	
	public void sendSms(Long id) {
		Twilio.init(twilioSid, twilioToken);
		
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);
		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		
		Sale sale = saleService.findSaleId(id);
		
		String ref = sale.getDate().getMonth().getValue() + "/" + sale.getDate().getYear();
		String body = String.format("Seller: %s\nAmount deals: R$ %.2f\nRef.: %s", sale.getSellerName(), sale.getAmount(), ref);
		
		Message.creator(to, from, body).create();
	}
}
