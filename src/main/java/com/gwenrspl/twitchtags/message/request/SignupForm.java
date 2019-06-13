package com.gwenrspl.twitchtags.message.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignupForm {

    @NotBlank
    @Size(min=3, max=60)
    private String username;

    @NotBlank
    @Size(max=60)
    @Email
    private String email;

    @NotBlank
    private String role;

    @NotBlank
    @Size(min=3, max=40)
    private String password;

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
