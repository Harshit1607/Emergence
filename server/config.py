from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    openrouter_api_key: str
    openrouter_model: str = "meta-llama/llama-3.1-8b-instruct:free"
    openrouter_base_url: str = "https://openrouter.ai/api/v1"
    mongodb_uri: str
    cors_origins: list[str] = ["http://localhost:3000"]
    site_url: str = "http://localhost:3000"
    app_name: str = "Harshit Bareja Portfolio"

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")


settings = Settings()
