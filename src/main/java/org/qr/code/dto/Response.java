package org.qr.code.dto;

import lombok.Data;

public class Response<T> {

	private T data;
	private String Messgae;
	private int statuscode;

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public String getMessgae() {
		return Messgae;
	}

	public void setMessgae(String messgae) {
		Messgae = messgae;
	}

	public int getStatuscode() {
		return statuscode;
	}

	public void setStatuscode(int statuscode) {
		this.statuscode = statuscode;
	}

}
