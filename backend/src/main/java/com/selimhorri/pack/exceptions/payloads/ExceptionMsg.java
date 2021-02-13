package com.selimhorri.pack.exceptions.payloads;

import java.io.Serializable;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

public class ExceptionMsg implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private final String msg;
	private Throwable throwable;
	private final HttpStatus status;
	private LocalDateTime timestamp;
	
	public ExceptionMsg(final String msg, final HttpStatus status, final LocalDateTime timestamp) {
		this.msg = msg;
		this.status = status;
		this.timestamp = timestamp;
	}
	
	public ExceptionMsg(final String msg, final Throwable throwable, final HttpStatus status, final LocalDateTime timestamp) {
		this.msg = msg;
		this.throwable = throwable;
		this.status = status;
		this.timestamp = timestamp;
	}
	
	@Override
	public String toString() {
		return "ExceptionMsg [msg=" + msg + ", throwable=" + throwable + ", status=" + status + ", timestamp=" + timestamp + "]";
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public String getMsg() {
		return msg;
	}
	
	public Throwable getThrowable() {
		return throwable;
	}
	
	public HttpStatus getStatus() {
		return status;
	}
	
	public LocalDateTime getTimestamp() {
		return timestamp;
	}
	
	
	
}







