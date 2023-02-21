package backend.CustomeApiResponse;

import backend.Constants.Constants;

public class CustomApiResponse {
    private Object data;
    private Integer status;
    private String message;

    public static CustomApiResponse created(String object, Object data) {
        CustomApiResponse response = new CustomApiResponse();
        response.setData(data);
        response.setMessage(object + Constants.CREATED_SUCCESSFULLY);
        response.setStatus(201);
        return response;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Object getData() {
        return data;
    }

    public Integer getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}
